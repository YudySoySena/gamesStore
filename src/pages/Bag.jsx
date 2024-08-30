import React from 'react'
import './bag.css'

function Bag({ games, reference }) {
  return (
    <section id="bag" className='bag' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>My Bag</h1>
          </div>
        </div>
        {
          games.lengh === 0 ? (
            <h2>Your Bag is emty</h2>
          ) : (
            <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>No</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            </>
          )
        }
    </section>
  )
}

export default Bag