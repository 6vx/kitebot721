# Delete old files, copy new files, initiate the deno script
Write-Output "Powershell script starting."
# Clear out the existing files
if (Test-Path "C:\effin\kitebotPlainSvelte\kitebot721\src\lib\text"){
    Write-Output "Found old files, deleting..."
    Remove-Item -Path "C:\effin\kitebotPlainSvelte\kitebot721\src\lib\text" -Recurse
}
if (Test-Path "C:\effin\kitebotPlainSvelte\kitebot721\src\lib\text"){
    Write-Output "The files are still there, somethings wrong, bailing."
    Write-Error "You fucked up something check your directories."
} else {
    Write-Output "Directory is empty, preparing to copy source files."
}

# Condition: Exists? 
# Is there a folder to copy from?
# If so you're probably on one of your home computers and can grab your text documents.
$conditionExists = Test-Path "C:\Users\tim_g\OneDrive\deathmetta\text"
if ($conditionExists) {
    Write-Output "Source files exist. Copying..."
    Copy-Item -Path "C:\Users\tim_g\OneDrive\deathmetta\text" -Destination "C:\effin\kitebotPlainSvelte\kitebot721\src\lib\" -Recurse
    Write-Output "Copy is complete."
}
# Refresh the text folders
deno run --allow-read --unstable --allow-write .\denoTextGenScript.ts