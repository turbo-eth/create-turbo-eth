import { getIronSession } from 'iron-session'
import ssx from './_ssx'

import { SERVER_SESSION_SETTINGS } from '@/lib/session'

export async function GET(req: Request) {
  const res = new Response(JSON.stringify({ ok: await ssx.logout() && true }))
  const session = await getIronSession(req, res, SERVER_SESSION_SETTINGS)
  session.destroy()
  return res
}
