import React from 'react'

function EditProject() {
    return (
        <div>
            <form>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">Project name</label>
                        </div>
                    </div>
                </div>
                <div class="form-outline mb-4">
                    <input type="text" id="form6Example3" class="form-control" />
                    <label class="form-label" for="form6Example3">User name</label>
                </div>
                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                    <label class="form-label" for="form6Example7">Descripton</label>
                </div>
                <div class="form-outline">
                    <input type="url" id="typeURL" class="form-control" />
                    <label class="form-label" for="typeURL">Project Websit</label>
                </div>
                <div class="form-outline">
                    <input type="url" id="typeURL" class="form-control" />
                    <label class="form-label" for="typeURL">Source Code</label>
                </div>
                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                    <label class="form-label" for="form6Example7">Technologies</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Edit</button>
            </form>
        </div>
    )
}

export default EditProject
