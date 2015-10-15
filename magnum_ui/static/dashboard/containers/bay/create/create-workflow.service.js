/**
 * Copyright 2015 Cisco Systems, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  angular
    .module('horizon.dashboard.containers.bay')
    .factory('horizon.dashboard.containers.bay.workflow', bayWorkflow);

  bayWorkflow.$inject = [
    'horizon.dashboard.containers.basePath',
    'horizon.app.core.workflow.factory'
  ];

  function bayWorkflow(basePath, dashboardWorkflow) {
    return dashboardWorkflow({
      title: gettext('Create Bay'),

      steps: [
        {
          title: gettext('Info'),
          templateUrl: basePath + 'bay/create/info/info.html',
          helpUrl: basePath + 'bay/create/info/info.help.html',
          formName: 'bayInfoForm'
        },
        {
          title: gettext('Size'),
          templateUrl: basePath + 'bay/create/size/size.html',
          helpUrl: basePath + 'bay/create/size/size.help.html',
          formName: 'baySizeForm'
        },
        {
          title: gettext('Misc'),
          templateUrl: basePath + 'bay/create/misc/misc.html',
          helpUrl: basePath + 'bay/create/misc/misc.help.html',
          formName: 'bayMiscForm'
        }
      ],

      btnText: {
        finish: gettext('Create')
      },

      btnIcon: {
        finish: 'fa fa-cloud-download'
      }
    });
  }
})();
