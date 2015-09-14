echo "Provisioning server using DigitalOcean"
node main.js
echo "Provisioning server using Amazon AWS"
python provisionAWS.py
sleep 90s
echo "Installing and starting NginX on both the servers"
ansible-playbook nginx.yml -i inventory
echo "Done!"
