import React, { useState, useEffect } from 'react';
import { fetchCandidates } from '../services/api';
import SearchBar from './SearchBar';

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const loadCandidates = async () => {
            const data = await fetchCandidates();
            setCandidates(data);
        };
        loadCandidates();
    }, []);

    const handleSearch = (term) => setSearchTerm(term);

    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCandidates = [...filteredCandidates].sort((a, b) =>
        sortOrder === 'asc'
            ? a.yearsOfExperience - b.yearsOfExperience
            : b.yearsOfExperience - a.yearsOfExperience
    );

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='w-1/2 h-[540px] flex flex-col shadow-2xl py-2 px-5'>
                <h1 className='text-3xl font-bold text-center'>Candidate List Viewer</h1>
                <div className='flex justify-between my-5'>
                    <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
                    <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className='bg-pink-600 text-white font-semibold px-3 rounded-lg text-base border-2 border-pink-600 hover:bg-white hover:text-pink-600 duration-200 transition-all'>
                        Sort by Experience {sortOrder === 'asc' ? 'Asc' : 'Des'}
                    </button>
                </div>
                <table className='border-2 border-black my-2'>
                    <thead>
                        <tr className='text-lg border-2 border-black'>
                            <th className='w-1/3 border-r-2 border-black py-2'>Name</th>
                            <th className='w-1/3 border-r-2 border-black'>Skills</th>
                            <th>Years of Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCandidates.map(candidate => (
                            <tr key={candidate.id}>
                                <td className='w-1/3 border-r-2 border-black pl-3 pt-2'>{candidate.name}</td>
                                <td className='w-1/3 border-r-2 border-black pl-3 pt-2'>{candidate.skills}</td>
                                <td className='w-1/3 text-center pt-2'>{candidate.yearsOfExperience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CandidateList;
