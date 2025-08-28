export default async function LoginUser(credentials, endpoint) {
  const res = await fetch(`http://localhost:5500/api/${endpoint}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    return await res.json()
}