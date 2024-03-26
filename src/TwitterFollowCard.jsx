import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                src={`https://unavatar.io/${userName}`}
                className='tw-followCard-avatar'
                alt="El avatar plagiado de Deiby"/>
                <div className='tw-followCard-info'>
                    <strong> {children} </strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>

        </article>
    )
}