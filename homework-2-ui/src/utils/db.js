const { MongoClient } = require("mongodb")

const URI = process.env.MONGO_URI
const DB = 'homework2'
const COLLECTION = 'users'

// Simple all-document loader
export const findAll = async() => {
    try {
        const client = new MongoClient(URI)
        const accessor = client.db(DB).collection(COLLECTION)
        const result = await accessor.find({}).toArray()
        await client.close()

        return {
            data: result,
            error: null
        }
    } catch (e) {
        return {
            data: [],
            error: e.message
        }
    }
}

export const upsert = async(user) => {
  try {
    const client = new MongoClient(URI)
    const accessor = client.db(DB).collection(COLLECTION)
    const result = await accessor
      .updateOne(
        { _id: user._id },
        { $set: { name: user.name, points: user.points, _id: user._id } },
        { upsert: true }
      )

    await client.close()

    return { success: result?.modifiedCount > 0 || result?.upsertedCount > 0 }
  } catch (e) {
    return { success: false, error: e.message  }
  }
}
