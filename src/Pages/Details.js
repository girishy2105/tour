import React from 'react'

const Details = () => {
  return (
    <header>
      <div class='accordion accordion-flush' id='accordionFlushExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingOne'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              BALI TOUR DETAILS
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              <div className='bali'>
                <img src='./bali.png' />
              </div>
              <p>
                Bali is the only Hindu-majority province in Indonesia, with
                86.9% of the population adhering to Balinese Hinduism.[3] It is
                renowned for its highly developed arts, including traditional
                and modern dance, sculpture, painting, leather, metalworking,
                and music. The Indonesian International Film Festival is held
                every year in Bali. Other international events held in Bali
                include the Miss World 2013, 2018 Annual Meetings of the
                International Monetary Fund and the World Bank Group and 2022
                G20 summit. In March 2017, TripAdvisor named Bali as the world's
                top destination in its Traveller's Choice award, which it also
                earned in January 2021.[10][11] Bali is part of the Coral
                Triangle, the area with the highest biodiversity of marine
                species, especially fish and turtles.[12] In this area alone,
                over 500 reef-building coral species can be found. For
                comparison, this is about seven times as many as in the entire
                Caribbean.[13] Bali is the home of the Subak irrigation system,
                a UNESCO World Heritage Site.[14] It is also home to a unified
                confederation of kingdoms composed of 10 traditional royal
                Balinese houses, each house ruling a specific geographic area.
                The confederation is the successor of the Bali Kingdom. The
                royal houses are not recognised by the government of Indonesia;
                however, they originated before Dutch colonisation.[15]
              </p>
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingTwo'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              SINGAPORE TOUR DETAILS
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              <div className='bali'>
                <img src='./singapore.png'></img>
              </div>
              <p>
                Singapore's history dates back at least a millennium, having
                been a maritime emporium known as Temasek and subsequently as a
                major constituent part of several successive thalassocratic
                empires. Its contemporary era began in 1819 when Stamford
                Raffles established Singapore as an entrepôt trading post of the
                British Empire. In 1867, the colonies in Southeast Asia were
                reorganised and Singapore came under the direct control of
                Britain as part of the Straits Settlements. During the Second
                World War, Singapore was occupied by Japan in 1942, and returned
                to British control as a separate crown colony following Japan's
                surrender in 1945. Singapore gained self-governance in 1959 and
                in 1963 became part of the new federation of Malaysia, alongside
                Malaya, North Borneo, and Sarawak. Ideological differences, most
                notably the perceived encroachment of the egalitarian "Malaysian
                Malaysia" political ideology led by Lee Kuan Yew into the other
                constituent entities of Malaysia—at the perceived expense of the
                bumiputera and the policies of Ketuanan Melayu—eventually led to
                Singapore's expulsion from the federation two years later;
                Singapore became an independent sovereign country in 1965.
              </p>
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header' id='flush-headingThree'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree'
              aria-expanded='false'
              aria-controls='flush-collapseThree'
            >
              AUSTRALIA TOUR DETAILS
            </button>
          </h2>
          <div
            id='flush-collapseThree'
            class='accordion-collapse collapse'
            aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              <div className='bali'>
                <img src='./aus.png'></img>
              </div>
              <p>
                Australia, officially the Commonwealth of Australia, is a
                sovereign country comprising the mainland of the Australian
                continent, the island of Tasmania, and numerous smaller
                islands.[13] With an area of 7,617,930 square kilometres
                (2,941,300 sq mi),[14] Australia is the largest country by area
                in Oceania and the world's sixth-largest country. Australia is
                the oldest,[15] flattest,[16] and driest inhabited
                continent,[17][18] with the least fertile soils.[19][20] It is a
                megadiverse country, and its size gives it a wide variety of
                landscapes and climates, with deserts in the centre, tropical
                rainforests in the north-east, and mountain ranges in the
                south-east.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Details
