echo "Installing Node.js package dependencies..."
npm install
echo "Provisioning server using DigitalOcean..."
node provisionDigitalOcean.js
echo "Done!"
echo "Installing Python package dependencies..."
pip install boto
echo "Provisioning server using Amazon AWS..."
python provisionAWS.py
echo "Done!"
export ANSIBLE_HOST_KEY_CHECKING=False
echo "Waiting for the servers to initialize..."
sleep 90s
echo "Installing and starting NginX on both the servers..."
ansible-playbook nginx.yml -i inventory
echo "Done!"
