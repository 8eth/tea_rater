import React,{ useState } from 'react'

function EditBio({ user, userBio, setUserBio, showEditForm, setShowEditForm }) {
    const [formData, setFormData] = useState ({ 
        bio: userBio
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) { 
        e.preventDefault();

        const editedBio = {
            bio: formData.bio
        }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userBio: editedBio})
        })
        .then(response => response.json())
        .then(setUserBio((userBio) => editedBio))
        .then(setShowEditForm(!showEditForm))
    }

    return (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <input 
                        name="bio" 
                        type="text"
                        id={FormData.bio}
                        value={formData.bio}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            
            <br></br>
            <button className="ui submit green button center" type="submit">Update</button>
            <br></br>
            <br></br>

        </form>
    )
}

export default EditBio