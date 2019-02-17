import React from 'react';
import './add-encounter.css'

export default function AddEncounter(props) {
    return (
        <section className="add-encounter">
            <button type="button" className="add-encounter-button">Add Encounter</button>
            <form action="/api/users/" method="post" className="add-encounter-form hidden">
            <label>
                Encounter Name: <input type="text" size="35" name="encounter-name" className="encounter-name" aria-label="encounter-name" placeholder="Enter encounter name" required />
            </label>
            <label>
                Animal Image: <input type="url" size="35" name="image" className="image" aria-label="image" placeholder="Enter url with animal image" />
            </label>
            <label>
                Zoo Name: <input type="text" size="35" name="zoo-name" className="zoo-name" aria-label="zoo-name" placeholder="Enter zoo name" required />
            </label>
            <label>
                Zoo Website: <input type="text" size="35" name="website" className="website" aria-label="website" placeholder="Enter zoo website" required />
            </label>
            <label>
                Zoo Location: <input type="text" size="35" name="zoo-location" className="zoo-location" aria-label="zoo-location" placeholder="Ex. San Francisco, CA or Sydney, Australia" required />
            </label>
            <label>
                Encounter Cost: <input type="text" size="35" name="cost" className="cost" aria-label="cost" placeholder="Enter encounter cost" required />
            </label>
            <label>
                Encounter Schedule: <input type="text" size="35" name="schedule" className="schedule" aria-label="schedule" placeholder="Enter encounter schedule" required />
            </label>
            <label>
                Encounter Description: <input type="textarea" rows="4" cols="40" name="description" className="description" aria-label="description" placeholder="Enter short description of encounter. Do not include personal review of the experience." required />
            </label>
            <button type="submit" class="submit-encounter">Submit Encounter</button>
            </form>
        </section>
    );
}