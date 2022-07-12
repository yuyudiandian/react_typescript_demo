export type ProfileProps = {
    name:string
}

export const Profile = ({name}:ProfileProps) => {
    return (
        <div>
        <h1>Profile,name is {name}</h1>
        </div>
    )
}
