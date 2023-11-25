// DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
async fn save_config(path: String, config: String) -> Result<(), String> {
    // extract the directory path from the file path
    let dir_path = std::path::Path::new(&path).parent().unwrap();

    // If a directory does not exist, create it
    if !dir_path.exists() {
        match std::fs::create_dir_all(dir_path) {
            Ok(_) => println!("Directory created successfully"),
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

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_config,
            load_config
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
