
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    console.log(body)

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    // If the `_type` is `testimonial`, then all `client.fetch` calls with
    // `{next: {tags: ['testimonial']}}` will be revalidated
    revalidateTag(body._type)

    return NextResponse.json({ body })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) return new Response(err.message, { status: 500 })
    else return new Response(JSON.stringify(err), { status: 500 })
  }
}