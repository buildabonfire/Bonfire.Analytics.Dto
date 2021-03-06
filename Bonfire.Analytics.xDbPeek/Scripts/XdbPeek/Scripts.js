﻿function getVisitorDetails() {
  $('.contact-list-pre').jsonViewer(contacts);
  $('.pages-list-pre').jsonViewer(pagesViewed);
  var goals = {};
  goals.CurrentGoals = goalsList;
  goals.PastGoals = pastGoals;
  $('.goals-list-pre').jsonViewer(goals);
  $('.visit-data-list-pre').jsonViewer(interactions);
  var campaigns = {};
  campaigns.CurrentCampaign = currentCampaign;
  campaigns.PastCampaigns = pastCampaigns;
  $('.campaigns-list-pre').jsonViewer(campaigns);
  var profiles = {};
  profiles.CurrentProfiles = currentProfiles;
  profiles.PastProfiles = pastProfiles;
  $('.profiles-list-pre').jsonViewer(profiles);
  var lists = {};
  lists.Automations = listsAutomations;
  for (let i = 0; i < facets.length; i += 1) {
    let facet = facets[i];
    if (facet.Value && facet.Value.XObject) {
      facets.splice(i, 1);
    }
    if (facet.Key === 'ListSubscriptions' && facet.Value && facet.Value.Subscriptions) {
      lists.Lists = facet.Value.Subscriptions;
      facets.splice(i, 1);
    }
  }
//  if (membership[0] && membership[0].Value.XObject) {
//    delete membership[0].Value.XObject;
//  }
  $('.lists-automations-list-pre').jsonViewer(lists);
  $('.facets-list-pre').jsonViewer(facets);
}

function handleModalClick(index) {
  document.querySelector('div.slide.active').classList.remove('active');
  document.querySelector('div.slide#s' + index).classList.add('active');
  $('#cardSelectionModal').modal('hide');
}

(function () {
  getVisitorDetails();
  const buttonDropdown = document.querySelector('button.dropdown');
  buttonDropdown.addEventListener('click', function(event) {
      $('#cardSelectionModal').modal('show');
  });
  const labelHeaders = document.querySelectorAll('div.slide > h2');
  for (let i = 0; i < labelHeaders.length; i += 1) {
    labelHeaders[i].addEventListener('click',
      function(event) {
        $('#cardSelectionModal').modal('show');
      });
  }
})();