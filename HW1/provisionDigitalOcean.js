var needle = require("needle");
var os   = require("os");

var config = {};
config.token = "ee59a1a08c2f4342070b6618a7fe6059160b06d239f939e46a45d25998221d07";

var headers =
{
	'Content-Type':'application/json',
	Authorization: 'Bearer ' + config.token
};


var client =
{
	listRegions: function( onResponse )
	{
		needle.get("https://api.digitalocean.com/v2/regions", {headers:headers}, onResponse)
	},

	listImages: function( onResponse )
        {
                needle.get("https://api.digitalocean.com/v2/images", {headers:headers}, onResponse)
        },

	createDroplet: function (dropletName, region, imageName, onResponse)
	{
		var data = 
		{
			"name": dropletName,
			"region":region,
			"size":"512mb",
			"image":imageName,
			// Id to ssh_key already associated with account.
			"ssh_keys":['33:90:bb:35:66:4b:94:8b:58:c3:74:f6:87:0f:c3:f2'],
			//"ssh_keys":null,
			"backups":false,
			"ipv6":false,
			"user_data":null,
			"private_networking":null
		};

		//console.log("Attempting to create: "+ JSON.stringify(data) );

		needle.post("https://api.digitalocean.com/v2/droplets", data, {headers:headers,json:true}, onResponse );
	},
	
	getDroplet: function( dropletId, onResponse )
        {
                needle.get("https://api.digitalocean.com/v2/droplets/"+dropletId, {headers:headers}, onResponse)
        },
};

// Create an droplet with the specified name, region, and image

var name = "ndgandhi-"+os.hostname();
var region = "nyc1";
var image = "ubuntu-14-04-x64";
var dropletId = "";
client.createDroplet(name, region, image, function(err, resp, body)
{
 	// StatusCode 202 - Means server accepted request.
 	if(!err && resp.statusCode == 202)
 	{
		dropletId = body['droplet']['id'] 
		setTimeout(function() {
			client.getDroplet(dropletId, function(error, response)
			{
				var data = response.body;
				if( response.headers )
				{
					//console.log( "Calls remaining", response.headers["ratelimit-remaining"] );
				}
				if (data.droplet)
				{ 	
					var fs = require('fs');
					console.log("Ubuntu Server droplet with IP Address:"+data.droplet.networks.v4[0]['ip_address']+" provisioned on Digital Ocean")
					var data = "[servers]\nnode0 ansible_ssh_host="+data.droplet.networks.v4[0]['ip_address']+" ansible_ssh_user=root ansible_ssh_private_key_file=./id_rsa\n";

					fs.writeFile("inventory", data, function (err) {
					  if (err) return console.log(err);
					});
				}
			})
		}, 10000);		

		
 	}
});




