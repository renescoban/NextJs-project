import '../styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'



export const metadata = {
  title: 'Creativa',
  description: 'representing creativity and imagination, a place of endless inspiration and possibilities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
