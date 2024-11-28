
export function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("OnyxDatabase", 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("projects")) {
                db.createObjectStore("projects", { keyPath: "id" });
            }
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };

        request.onerror = function (event) {
            reject("Database error: " + event.target.errorCode);
        };
    });
}

export function saveProject(project) {
    return openDatabase().then((db) => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["projects"], "readwrite");
            const store = transaction.objectStore("projects");
            const request = store.put(project);

            request.onsuccess = () => resolve("Project saved successfully.");
            request.onerror = (event) =>
                reject("Error saving project: " + event.target.errorCode);

            transaction.oncomplete = () => db.close();
        });
    });
}

// If we need this...
export function loadProject(id) {
    return openDatabase().then((db) => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["projects"], "readonly");
            const store = transaction.objectStore("projects");
            const request = store.get(id);

            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) =>
                reject("Error loading project: " + event.target.errorCode);

            transaction.oncomplete = () => db.close();
        });
    });
}
