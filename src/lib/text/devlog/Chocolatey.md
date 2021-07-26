# Chocolatey

## a windows package manager

I use choco to update as many things as I can. 

I can update node using the following, for example:

    choco upgrade nodejs -y

Here's the script I typically run after reinstalling windows:

    notepad .\chocolatey.ps1
    # Setting the permissions and install chocolatey must be done separately using the next command.
    # Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

    # To check your current installs use 'choco list -localonly'

    choco install adobereader -y
    choco install audacity -y
    choco install calibre -y
    # choco install discord -y
    choco install git -y
    choco install nodejs -y
    choco install deno -y
    choco install notepadplusplus -y
    choco install qbittorrent -y
    choco install powershell-core -y
    choco install telegram -y
    choco install vlc -y
    choco install vscode -y
    choco install dotnet -y
    choco install steam-client -y
    # choco install ffmpeg -y
    choco install 7zip -y
    choco install tor-browser -y
    # choco install session -y
    # choco install inkscape -y
    choco install youtube-dl -y
    # choco install microsoft-teams.install -y

I've got a few commented out since they've fallen into disuse, but I wanted to leave them in there for when I inevitably go to dig them up again. 