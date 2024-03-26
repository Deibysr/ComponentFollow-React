import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="DeibySR"> 
            Deiby Eduardo Salazar Rosero
             </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
            Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName="sarah_edo">
            Sarah Drasner
            </TwitterFollowCard>
        </section>
    )
}
