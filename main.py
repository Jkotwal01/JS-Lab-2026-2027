import os

# Folder names
experiments = ["Exp6", "Exp7", "Exp8", "Exp9"]

# Files to create inside each folder
files = ["index.html", "styles.css", "script.js"]

# Create folders and files
for experiment in experiments:
    # Create experiment folder
    os.makedirs(experiment, exist_ok=True)

    # Create the three files
    for file in files:
        file_path = os.path.join(experiment, file)

        # Create an empty file
        with open(file_path, "w") as f:
            pass

print("Folders and files created successfully!")