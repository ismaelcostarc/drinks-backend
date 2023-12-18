import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from "App/Models/User";

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const newPostSchema = schema.create({
      email: schema.string(),
      password: schema.string(),
    })

    const payload = await request.validate({ schema: newPostSchema })

    const email = payload.email
    const password = payload.password

    const token = await auth.use("api").attempt(email, password, {
      expiresIn: "10 days",
    });

    return token.toJSON();
  }

  public async register({ request, auth }: HttpContextContract) {
    const newPostSchema = schema.create({
      email: schema.string(),
      password: schema.string(),
      name: schema.string(),
    })

    const payload = await request.validate({ schema: newPostSchema })

    const email = payload.email
    const password = payload.password
    const name = payload.name

    const user = new User();
    user.email = email;
    user.password = password;
    user.name = name

    await user.save();

    const token = await auth.use("api").login(user, {
      expiresIn: "10 days",
    });

    return token.toJSON();
  }

  public async currentUser({ auth, response }: HttpContextContract) {
    return response.ok(auth.user)
  }
}
