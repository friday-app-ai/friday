import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";

export default async function GetUserService() {
  const service = new UserService();
  await service.init();
  return service;
}

class UserService {
  private User = UserModel;
  async init() {
    await dbConnect();
  }

  async RegesterUserToCourse(userId: string, courseId: string) {
    await this.User.findByIdAndUpdate(userId, {
      $push: {
        courses: { courseId },
      },
    });
  }
}
