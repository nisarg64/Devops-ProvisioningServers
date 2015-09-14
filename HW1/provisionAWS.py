import boto.ec2
import time


ec2 = boto.connect_ec2()
#key_pair = ec2.create_key_pair('ec2-key')
#key_pair.save('./')
reservation = ec2.run_instances(image_id='ami-01fa416a', key_name='ec2-key', user_data = """#!/bin/bash
apt-get update
apt-get install -y imagemagick
""")


time.sleep(20)
# Wait a minute or two while it boots
for r in ec2.get_all_instances():
    if r.id == reservation.id:
        break

with open('inventory', 'a') as file:
    file.write('node1 ansible_ssh_host='+str(r.instances[0].ip_address)+' ansible_ssh_user=ubuntu ansible_ssh_private_key_file=ec2-key.pem')
