import React from 'react';
import Cover from './Cover';
import Genre from './Genre';
import Company from './Company';
import Name from './Name';
import ReleaseDate from './ReleaseDate';
import Addbtn from './Addbtn';
import API from '../util/API';

function List(props) {




    return (
        <ul className="container">
            {props.apiReturn.map((elem) => {
                let imgLink = `https://images.igdb.com/igdb/image/upload/t_thumb/${elem.cover.image_id}.jpg`
                let companyPublisher = elem.involved_companies.filter(el => el.publisher)
                let info2db = {
                    name: elem.name,
                    genre: elem.genres,
                    company: companyPublisher,
                    releaseDate: elem.release_dates[elem.release_dates.length - 1]
                }
                {/* This function is called when user want to add one option directly to his list */ }
                function add2db(data) {
                    console.log("this is the data to database" + data)
                    API.addNew(data)
                        .then(() => { console.log("cool") })
                        .catch(err => { console.log(err) })
                }
                return <li key={elem.id} className="row no-gutters border-bottom border-warning">
                    <div className="col-3 d-flex text-center">
                        <Cover imgInfo={imgLink} alt={elem.id} />
                    </div>
                    <div className="col-6 d-flex">
                        <Name name={elem.name} />
                        <Genre genreList={elem.genres} />
                        <Company company={companyPublisher[0]} />
                        <ReleaseDate date={elem.release_dates} />
                    </div>
                    <div className="col-3 d-flex text-center">
                        <Addbtn />
                    </div>

                </li>
            })}

        </ul>
    )
}

export default List