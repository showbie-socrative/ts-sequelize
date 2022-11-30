import { Student } from "../models";
import { DatabaseRepository } from "./database.repository";

class StudentRepository extends DatabaseRepository<Student> {
  static instance: StudentRepository;

  constructor() {
    if (StudentRepository.instance) {
      return StudentRepository.instance;
    }

    super(Student);
    StudentRepository.instance = this;
  }
}

export const studentRepository = new StudentRepository();
