import { SkillsProps } from './skills.types';
import { useEffect, useState } from 'react';

export const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // after 500 ms
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 500);
    }, []);
    return (
        <>
            <ul>
                {skills.map((skill: any) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Start Learning</button>}
            {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}

        </>
    );
}