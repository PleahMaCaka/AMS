// DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;

#[tauri::command]
async fn save_config(path: String, config: String) -> Result<(), String> {
    // extract the directory path from the file path
    let dir_path = std::path::Path::new(&path).parent().unwrap();

    // If a directory does not exist, create it
    if !dir_path.exists() {
        match std::fs::create_dir_all(dir_path) {
            Ok(_) => println!("Created save directory {}", dir_path.display()),
            Err(e) => return Err(e.to_string()),
        }
    }

    match std::fs::write(&path, &config) {
        Ok(_) => {
            // Check if the file content matches the saved content
            match std::fs::read_to_string(&path) {
                Ok(content) => {
                    if content == config {
                        Ok(())
                    } else {
                        Err("File content does not match the saved content".to_string())
                    }
                }
                Err(e) => Err(e.to_string())
            }
        }
        Err(e) => Err(e.to_string())
    }
}

#[tauri::command]
async fn load_config(path: String) -> Result<String, String> {
    println!("Loading config from {}", path);
    match std::fs::read_to_string(path) {
        Ok(config) => Ok(config),
        Err(e) => Err(e.to_string())
    }
}

#[tauri::command]
async fn open_explorer(path: String) {
    #[cfg(target_os = "windows")]
    {
        // if os is windows, use explorer
        Command::new("explorer")
            .arg(["/select,", &path].concat())
            .spawn()
            .expect("Failed to open explorer");
    }

    #[cfg(target_os = "macos")]
    {
        // if os is mac, use open
        Command::new("open")
            .arg(["-R", &path].concat())
            .spawn()
            .expect("Failed to open explorer");
    }

    #[cfg(target_os = "linux")]
    {
        // if os is linux, use xdg-open
        Command::new("xdg-open")
            .arg(["--select", &path].concat())
            .spawn()
            .expect("Failed to open explorer");
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_config,
            load_config,
            open_explorer
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
