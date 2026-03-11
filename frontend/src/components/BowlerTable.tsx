import { useEffect, useState } from 'react';
import type { Bowler } from '../types/Bowlers';

// BowlerTable component - fetches and displays bowler data from the API
function BowlerTable() {
    
    // State to hold the list of bowlers
    const [bowlers, setBowlers] = useState<Bowler[]>([]);
    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:7083/api/Bowling');
            const data = await response.json();
            setBowlers(data);
        };
        fetchBowler();
    }, []);
    
    // Render the table of bowlers
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Map over the bowlers and create a table row for each one
                        bowlers.map((b) => (
                            <tr key={b.bowlerId}>
                                <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                <td>{b.team.teamName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default BowlerTable;