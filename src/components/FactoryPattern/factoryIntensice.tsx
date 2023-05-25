export class UserPasswordFactory {
  private static validRegex =
    /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_=(),./:;{}[\]|\\<>-]).{8,}$/;

  public static create(password: string): UserPassword {
    if (!this.validate(password)) {
      throw new UserPasswordInvalidException();
    }

    const salt = bcrypt.genSaltSync();
    return new UserPassword({
      salt,
      encrypted: bcrypt.hashSync(password, salt),
      createdAt: new Date(),
    });
  }

  private static validate(password: string): boolean {
    if (typeof password !== "string") {
      return false;
    }

    return this.validRegex.test(password);
  }
}

user.password = UserPasswordFactory.create(inputPassword);
