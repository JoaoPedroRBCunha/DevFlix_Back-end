import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

Category.hasMany(Course);
Course.hasMany(Episode, { as: "episodes" });
Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.hasMany(Episode);

Episode.belongsTo(Course);

export { Course, Category, Episode, User };
