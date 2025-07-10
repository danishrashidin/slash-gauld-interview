import { useSelector, useDispatch } from "react-redux"
import type { Dispatch, State } from "../store/store"
import { useEffect } from "react"
import { fetchIssues } from "../store/slices/issues"
import { useNavigate } from "react-router"

export default function IssuesPage() {
    const issues = useSelector((state: State) => state.issuesSlice.items)
    const dispatch = useDispatch<Dispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchIssues())
    }, [dispatch])

    return (
        <div>
            <h1>Issues</h1>
            <div>
                {issues.map((issue) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: 16,
                    }}>
                        <span>Title: {issue.title}</span>
                        <span>Description: {issue.description}</span>
                    </div>
                ))}
            </div>

            <button type="button" onClick={() => navigate('/issues/add')}>Add Issue</button>
        </div>
    )
}