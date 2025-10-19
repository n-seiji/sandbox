import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hoge/:name', (c) => {
  return c.text('herro')
})

export default app
