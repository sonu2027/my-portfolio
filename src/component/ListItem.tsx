type props = {
    ULstyle: string
}

function ListItem({ ULstyle }: props) {
    return (
        <>
            <ul className={`${ULstyle}`}>
                <li className="text-violet-600 font-medium text-center underline text-sm py-1"><a href="https://leetcode.com/u/sonu2027/" target="_blank">LeetCode</a></li>
                <li className="text-violet-600 font-medium text-center underline text-sm py-1"><a href="https://www.geeksforgeeks.org/user/sonu2027/" target="_blank">GeeksForGekks</a></li>
                <li className="text-violet-600 font-medium text-center underline text-sm py-1"><a href="https://www.naukri.com/code360/profile/433a370a-3604-4a65-b6a5-bcfe5d32fffe" target="_blank">Coding Ninja</a></li>
                <li className="text-violet-600 font-medium text-center underline text-sm py-1"><a href="https://www.hackerrank.com/profile/takeinfo2u" target="_blank">Hacker Rank</a></li>
            </ul>
        </>
    )
}

export default ListItem