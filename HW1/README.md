# Provisioning Servers

## Screencast:
[![ScreenShot](https://dl.dropboxusercontent.com/s/1i0pdt1esw7alck/hw1-screenshot.png?dl=0)](https://www.youtube.com/watch?v=jog3wTpGWqs)

### Instructions:
#### Digital Ocean
* Generate public/private keys on local machine using `ssh-keygen` and upload the public key on the Digital Ocean settings page
* Generate a config token for Digital Ocean API

#### AWS
* Create a file `~/.boto` on the host machine and place the AWS access ID and the secret access key as belows : 
```
[credentials]
aws_access_key_id = <access_key_id>
aws_secret_access_key = <secret_access_key>
```
* We should enable the remote host inbound traffic from any IP. For this, edit the "inbound rules" in Security Groups -> Inbound tab -> Edit -> Set "Anywhere" for source
* On the EC2 dashboard, using Network and Security -> Key Pairs, generate a key pair for accessing the EC2 instance using `ssh`. The private key (.pem file) will be automatically downloaded onto our host machine

#### Installing Python and Python-pip on the host machine:
Download and Install Python 2.6 or higher and python-pip for package management from here:
http://docs.python-guide.org/en/latest/starting/install/linux/

#### Installing NodeJS on the host machine:
Download and Install NodeJS from here : https://nodejs.org/en/download/

#### Installing Ansible on the host machine

Run the following commands from the shell on the host:
```
git clone git://github.com/ansible/ansible.git --recursive
cd ./ansible
git checkout tags/v1.9.2-1
git submodule update --recursive
source ./hacking/env-setup
```
#### Execute the script
* Run `HW.sh` to install and start `nginx` on both the provisioned servers.


