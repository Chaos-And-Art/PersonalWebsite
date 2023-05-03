export class User {
    firstName?: string;
    lastName?: string;
    isLoggedIn?: boolean;
    role?: string;
}

export enum UserRole {
    Admin = 'Admin',
    Blogger = 'Blogger',
    User = 'User'
}  