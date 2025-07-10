import { useState } from "react"
import { useDispatch } from "react-redux"
import { addIssue } from '../store/slices/issues'
import type { Dispatch } from "../store/store"
import { useNavigate } from "react-router"

export default function AddIssuePage() {
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const dispatch = useDispatch<Dispatch>()
    const navigate = useNavigate()

    const submit = async () => {
        if (!title || !description) {
            return
        }

        await dispatch(addIssue({
            title,
            description
        }))

        navigate('/issues')
    }

    return (
        <div>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="button" onClick={submit}>Add</button>
        </div>
    )
}