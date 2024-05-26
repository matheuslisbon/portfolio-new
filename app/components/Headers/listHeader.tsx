import links from './links'

export default function ListHeader() {

  return (
      <ul className='flex gap-4 items-center'>
        {
          links.map(link => {
            return (
              <li
              className='border-b-4 border-b-neonBlue'
              key={Math.random()}>
                {link.name}
              </li>
            )
          })
        }
      </ul>
    );
  }
  