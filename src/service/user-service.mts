export class UserService {
  getUsers(page: number, size: number): string[] | null {
    return ["User1", "User2", "User3"];
  }
}

export default new UserService();
