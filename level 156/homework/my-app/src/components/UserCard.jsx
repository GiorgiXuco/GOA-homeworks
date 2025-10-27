function UserCard({ user }) {
    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    return (
        <div className="bg-[#1E2A47] rounded-2xl p-6 shadow-lg">
            <div className="flex gap-6">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-20 h-20 rounded-full"
                />

                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">{user.name || "No Name"}</h2>
                        <p className="text-sm text-gray-400">
                            Joined {formatDate(user.created_at)}
                        </p>
                    </div>
                    <p className="text-blue-400">@{user.login}</p>
                    <p className="mt-2 text-gray-300 text-sm">
                        {user.bio || "This profile has no bio"}
                    </p>
                </div>
            </div>

            <div className="bg-[#141D2F] rounded-lg flex justify-around py-4 mt-6">
                <div className="text-center">
                    <p className="text-sm">Repos</p>
                    <p className="font-bold">{user.public_repos}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm">Followers</p>
                    <p className="font-bold">{user.followers}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm">Following</p>
                    <p className="font-bold">{user.following}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <p>📍 {user.location || "Not Available"}</p>
                <p>
                    🔗{" "}
                    {user.blog ? (
                        <a href={user.blog} target="_blank" rel="noreferrer">
                            {user.blog}
                        </a>
                    ) : (
                        "Not Available"
                    )}
                </p>
                <p>🐦 {user.twitter_username || "Not Available"}</p>
                <p>💻 @{user.login}</p>
            </div>
        </div>
    );
}

export default UserCard;
