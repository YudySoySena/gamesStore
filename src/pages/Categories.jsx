import React, { useState } from 'react'
import './categories.css'
import filterListData from '../data/filterListData'

function Categories({ games, reference }) {
    const [filters, setFilters] = useState(filterListData)
    const handleFilterGames = category => {
        setFilters(
            filters.map(filter => {
                filter.active = false;
                if (filter.name === category) {
                    filter.active = true;
                }
                return filter;
            })
        );
    };
    return (
        <section id="categories" className='categories' ref={reference}>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="filters">
                            {filters.map(filter => (
                                <li
                                key={filter._id}
                                className={`${filter.active ? 'active' : undefined}`}
                                onClick={()=>handleFilterGames(filter.name)}>
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="search">
                        <i class="bi bi-search"></i>
                        <input type="text" name='search' placeholder='Buscar' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories