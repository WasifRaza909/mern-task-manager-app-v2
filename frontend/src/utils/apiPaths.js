export const BASE_URL = "http://localhost:8000"

export const API_CONFIG  = {
    AUTH: {
        REGISTER: "/api/auth/register", // Register new user (Admin or Member)
        LOGIN: "/api/auth/login", // Authenticate user & return JWT token
        GET_PROFILE: "/api/auth/profile", // Get logged-in user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", // Get all users (Admin only)
        GET_USER_BY_ID: (userId) =>  `/api/users/${userId}`, // Get user by ID
        CREATE_USER: "/api/users", // Create a new user (Admin only)
        UPDATE_USER: (userId) =>  `/api/users/${userId}`, // Update user details
        DELETE_USER: (userId) =>  `/api/users/${userId}`, // Delete a user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // GEt Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/usesr-dashboard-data", // Get User Dashboard Data
        GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin: all, User: only assigned)
        GET_TASK_BY_ID: (taskId) =>  `/api/tasks/${taskId}`, // Get task by ID
        CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
        UPDATE_TASK: (taskId) =>  `/api/tasks/${taskId}`, // Update task
        DELETE_TASK: (taskId) =>  `/api/tasks/${taskId}`, // Delete a task (Admin Only)

        UPDATE_TASK_STATUS: (taskId) =>  `/api/tasks/${taskId}/status`, // Update task Status
        UPDATE_TASK_CHECKLIST: (taskId) =>  `/api/tasks/${taskId}/todo`, // Update task todo checklist
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", // Download all tasks as an Excel report
        EXPORT_USERS: "/api/reports/export/users", // Download user-task report
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image", // Download all tasks as an Excel report
    },
}