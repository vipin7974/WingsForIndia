import React from 'react'

export default function Header() {
  return (
    <section class="navbar-navbarWrapper">
      <nav class="navbar-navbar navbar-flexItemCenter navbar-fixedTop navbar-pageScrolled">
        <a class="navbar-navbarBrand" to="/" href="/">
        
        </a>
        <div class="navbar-flexItemCenter navbar-linksWrapper">
          <ul class="navbar-navbarNav">
            <li id="exploreCampaigns" role="presentation">
              <a class=" ">
                Explore Campaigns
              </a>
            </li>
            <li id="requestACampaign" role="presentation">
              <a class="navbar-newLink">
                Start A Campaign
              </a>
            </li>
            <li id="donateMonthly" role="presentation">
              <button type="button" class="button-gradient-btn  navbar-btnMonthly button-gradient-gradient">
                Donate Monthly
              </button>
            </li>
          </ul>
          <ul class="navbar-navbarNav">
            <li class="account-menu-item-userDropdown" role="presentation">
              <a class="">
                Join Us / Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}
