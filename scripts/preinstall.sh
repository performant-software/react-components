 #!/bin/bash

# Generates an SSH config file for connections if a config var exists.

if [ "$REACT_COMPONENTS_SSH_KEY" != "" ]; then
  echo "Detected SSH key for react-components repo. Adding SSH config" >&1
  echo "" >&1

  # Ensure we have an ssh folder
  if [ ! -d ~/.ssh ]; then
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
  fi

  # Load the private key into a file.
  echo $REACT_COMPONENTS_SSH_KEY | base64 --decode > ~/.ssh/deploy_key_react_components

  # Change the permissions on the file to
  # be read-only for this user.
  chmod 400 ~/.ssh/deploy_key_react_components

  # Setup the ssh config file.
  echo -e "Host react-components\n"\
          " HostName github.com\n"\
          " IdentityFile ~/.ssh/deploy_key_react_components\n"\
          " IdentitiesOnly yes\n"\
          " UserKnownHostsFile=/dev/null\n"\
          " StrictHostKeyChecking no"\
          > ~/.ssh/config
fi