alert("here");
let hasRun = false;


     window.ondblclick = function() {if (!hasRun) {updateCustomerId(); hasRun = true;} replacePurchaseReturn(); updateProductAffinity(); replacePapularDay(); replacePapularMonth(); updateOverview(); updatechannelEngagement(); replacepopularResponseDay(); replacepopularResponseMonth();


                                   };


    function updateCustomerId() {
        //alert("here");
        document.querySelector("#ojCxuAskOracle_ask-oracle > div.oj-cxu-rw-ask-oracle-page-container > div > div > oj-module > profile-details > div > div.cxu-white-panel.oj-cxu-header-shadow.oj-cxu-container.profile-view > div.oj-cxu-left-panel > div.oj-flex > div:nth-child(2) > div > span.id-label").innerText = "Customer ID";
        document.querySelector("#ojCxuAskOracle_ask-oracle > div.oj-cxu-rw-ask-oracle-page-container > div > div > oj-module > profile-details > div > div.cxu-white-panel.oj-cxu-header-shadow.oj-cxu-container.profile-view > div.oj-cxu-left-panel > div.oj-flex > div:nth-child(2) > div > span.id-value.oj-sm-margin-6x-start").innerText = "5567980";

        document.querySelectorAll(".picto_layout .picto_chart_padding").forEach(el => {
                                        el.remove();
                                    });

                                    document.querySelectorAll(".metric-bold").forEach(el => {
                                        el.style.height = "80px";
                                        el.style.lineHeight = "30px";
                                    });


                                    let labels = document.querySelectorAll(".picto_layout .label_padding span:first-child");

                                    if (labels.length >= 3) {
                                        labels[0].textContent = "Customer Lifetime Value";
                                        labels[1].textContent = "Total Policies";
                                        labels[2].textContent = "Total Claims";
                                        labels[3].textContent = "Total Claims Amount";
                                    }

                                    // 2. Set values
                                    let metrics = document.querySelectorAll(".metric-bold span");
                                    let met = document.querySelectorAll(".profile-details .metric-bold");

                                    //met.style.height = "80px";

                                    if (metrics.length >= 3) {
                                        metrics[0].innerHTML = "<span style='font-size:18px;'>₹</span> <span style='font-size:22px;'>10,00,000</span>";
                                        metrics[1].innerHTML = "<span style='font-size:22px;'>3</span>";
                                        metrics[2].innerHTML = "<span style='font-size:22px;'>2</span>";
                                        metrics[3].innerHTML = "<span style='font-size:18px;'>₹</span> <span style='font-size:22px;'>2,00,000</span>";
                                    }

                                    // 3. Add colored blocks under each metric
                                    function addBlocks(container, count, color) {
                                        let blockWrapper = document.createElement("div");
                                        blockWrapper.style.marginTop = "6px";
                                        blockWrapper.style.display = "flex";
                                        blockWrapper.style.gap = "6px";

                                        for (let i = 0; i < count; i++) {
                                            let block = document.createElement("div");
                                            block.style.width = "24px";
                                            block.style.height = "24px";
                                            block.style.borderRadius = "0px";
                                            block.style.backgroundColor = color;
                                            blockWrapper.appendChild(block);
                                        }
                                        container.appendChild(blockWrapper);
                                    }

                                    if (metrics.length >= 3) {
                                        addBlocks(metrics[0].parentElement, 3, "#C54A39");
                                        addBlocks(metrics[1].parentElement, 3, "#C54A39");
                                        addBlocks(metrics[2].parentElement, 2, "#C54A39");
                                        addBlocks(metrics[3].parentElement, 4, "#C54A39");
                                    }

                                    document.querySelectorAll("oj-avatar").forEach(avatar => {
                                        while (avatar.firstChild) {
                                            avatar.removeChild(avatar.firstChild);
                                        }

                                        const img = document.createElement("img");
                                        img.src = "http://r-d7k13dz-8000005.oraclersys.com/assets/responsysimages/content/demo028/c360profile.png";
                                        img.alt = "User Avatar";
                                        img.style.width = "100%";
                                        img.style.height = "100%";
                                        img.style.objectFit = "cover";
                                        img.style.borderRadius = "8px";

                                        // Append new image
                                        avatar.appendChild(img);

                                        // Force visibility override (bypass Redwood JET CSS rule)
                                        avatar.style.visibility = "visible";
                                    });

    }


   



    function replacePurchaseReturn() {
        const purchaseCard = document.querySelector("#purchaseReturn");

        if (!purchaseCard) return;

        // Change header text
        const header = purchaseCard.querySelector(".header");
        if (header) header.textContent = "Policy Details";

        // Replace chart-body with inline styled table
        const chartBody = purchaseCard.querySelector(".chart-body");
        if (chartBody) {
            chartBody.innerHTML = `<br>
        <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif; font-size:14px;">
          <thead>
            <tr style="background-color:#C54A39; color:#fff;">
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Policy ID</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Policy Name</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Status</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color:#fff;">
              <td style="padding:8px 12px; border:1px solid #ddd;">POL-1001</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Supreme Care</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Active</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">₹ 15400</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px 12px; border:1px solid #ddd;">POL-1002</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Health insurance</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Active</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">₹ 12000</td>
            </tr>
            <tr style="background-color:#fff;">
              <td style="padding:8px 12px; border:1px solid #ddd;">POL-1003</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Travel Insurance</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Inactive</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">₹ 4500</td>
            </tr>
          </tbody>
        </table>
      `;
        }
    }

    function replacePapularDay() {
    const card = document.querySelector("#papularDay");
    if (!card) return;

    // Change header
    const header = card.querySelector(".header");
    if (header) {
      header.textContent = "Customer Insights";
    }

    // Replace inner content with Top product style table
    const charts = card.querySelector(".charts");
    if (charts) {
      charts.innerHTML = `<br>
        <table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 16px;">
          <tr style="border-bottom:1px solid #ddd; background:#f9f9f9;">
            <td style="padding:10px; font-weight:bold; color:#333;">Churn Score</td>
            <td style="padding:10px; color:green; font-weight:bold;">0.1</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:10px; font-weight:bold; color:#333;">Customer Type</td>
            <td style="padding:10px; color:#444;">Direct</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd; background:#f9f9f9;">
            <td style="padding:10px; font-weight:bold; color:#333;">CLTV</td>
            <td style="padding:10px; color:#007ACC; font-weight:bold;">10 lacs</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:bold; color:#333;">Fatigue Segment</td>
            <td style="padding:10px; color:purple; font-weight:bold;">Just Right</td>
          </tr>
        </table>
      `;
    }
  }

    function replacePapularMonth() {
    const card = document.querySelector("#papularMonth");
    if (!card) return;

    // Change header
    const header = card.querySelector(".header");
    if (header) {
      header.textContent = "Customer Preferences";
      header.style.fontSize = "18px";
      header.style.fontWeight = "bold";
      header.style.color = "#1A5276";
    }

    // Replace charts content with styled table
    const charts = card.querySelector(".charts");
    if (charts) {
      charts.innerHTML = `<br>
        <table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 16px;">
          <tr style="border-bottom:1px solid #e0e0e0; background:#f4f6f7;">
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Preferred Channel</td>
            <td style="padding:12px; color:#E67E22; font-weight:bold;">Email</td>
          </tr>
          <tr style="border-bottom:1px solid #e0e0e0;">
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Preferred Time</td>
            <td style="padding:12px; color:#28B463; font-weight:bold;">5:00 PM</td>
          </tr>
          <tr style="background:#f4f6f7;">
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Preferred Day</td>
            <td style="padding:12px; color:#8E44AD; font-weight:bold;">Monday</td>
          </tr>
        </table>
      `;
    }
  }

    function updateProductAffinity() {
        const card = document.querySelector("#productAffinity");
        if (!card) return;

        // Update header style
        const header = card.querySelector(".header");
        if (header) {
            header.textContent = "Product Affinity";
            header.style.fontSize = "18px";
            header.style.fontWeight = "bold";
            header.style.color = "#1A5276";
        }

        // Replace chart-body with styled table
        const body = card.querySelector(".chart-body");
        if (body) {
            body.innerHTML = `<br>
        <table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 16px;">
          <tr style="border-bottom:1px solid #e0e0e0; background:#f4f6f7;">
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Top Product</td>
            <td style="padding:12px; color:#E74C3C; font-weight:bold;">Supreme Care</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Top Product Category</td>
            <td style="padding:12px; color:#2980B9; font-weight:bold;">Health Insurance</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Renewal Propensity</td>
            <td style="padding:12px; color:#E74C3C; font-weight:bold;">0.8</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Payment Behavior</td>
            <td style="padding:12px; color:#2980B9; font-weight:bold;">Early Payment</td>
          </tr>
        </table>
      `;
        }
    }

 function updateOverview() {
        const card = document.querySelector("#overView");
        if (!card) return;

        // Update header style
        const header = card.querySelector(".header");
        if (header) {
            header.textContent = "Overview";
            header.style.fontSize = "18px";
            header.style.fontWeight = "bold";
            header.style.color = "#1A5276";
        }

        // Replace chart-body with styled table
        const body = card.querySelector(".chart-body");
        if (body) {
            body.innerHTML = `<br>
      <div class="chart-body">
        <div class="oj-flex">
          <div class="oj-flex-item individual-item">Open Rate for Email</div>
          <div class="oj-flex-bar-end individual-item">80%</div>
        </div>
        <div class="oj-flex">
          <div class="oj-flex-item individual-item">Click Rate for Email</div>
          <div class="oj-flex-bar-end individual-item">50%</div>
        </div>
        <div class="oj-flex">
          <div class="oj-flex-item individual-item">SMS Delivery Rate</div>
          <div class="oj-flex-bar-end individual-item">90%</div>
        </div>
        <div class="oj-flex">
          <div class="oj-flex-item individual-item">Mobile App</div>
          <div class="oj-flex-bar-end individual-item">60%</div>
        </div>
        <div class="oj-flex">
          <div class="oj-flex-item individual-item">WhatsApp Engagement</div>
          <div class="oj-flex-bar-end individual-item">30%</div>
        </div>
      </div>
      `;
        }
    }
    function updatechannelEngagement() {
        const card = document.querySelector("#channelEngagement");
        if (!card) return;

        // Update header style
        const header = card.querySelector(".header");
        if (header) {
            header.textContent = "Web activity";
            header.style.fontSize = "18px";
            header.style.fontWeight = "bold";
            header.style.color = "#1A5276";
        }

        // Replace chart-body with styled table
        const body = card.querySelector(".charts");
        if (body) {
            body.innerHTML = `<br>
      <table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 16px;">
          <tr style="border-bottom:1px solid #e0e0e0; background:#f4f6f7;">
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Mobile App installed</td>
            <td style="padding:12px; color:#E74C3C; font-weight:bold;">Yes</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">App version </td>
            <td style="padding:12px; color:#2980B9; font-weight:bold;">iOS 15</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">last Digital activity</td>
            <td style="padding:12px; color:#28B463; font-weight:bold;">Critical illness cover page</td>
          </tr>
		  <tr>
            <td style="padding:12px; font-weight:bold; color:#2C3E50;">Opt in</td>
            <td style="padding:12px; color:#28B463; font-weight:bold;">Yes</td>
          </tr>
        </table>
      `;
        }
    }

    function replacepopularResponseDay() {
        const popularResponseDayCard = document.querySelector("#popularResponseDay");

        if (!popularResponseDayCard) return;

        // Change header text
        const header = popularResponseDayCard.querySelector(".header");
        if (header) header.textContent = "SR Details";

        // Replace chart-body with inline styled table
        const chartBody = popularResponseDayCard.querySelector(".charts");
        if (chartBody) {
            chartBody.innerHTML = `<br>
        <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif; font-size:14px;">
          <thead>
            <tr style="background-color:#C54A39; color:#fff;">
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">SR No.</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Status</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Date</th>
              <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Claim ID</th>
			  <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Claim Amount</th>
			  <th style="padding:8px 12px; border:1px solid #ddd; text-align:left;">Claim Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color:#fff;">
              <td style="padding:8px 12px; border:1px solid #ddd;">SR1009</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Open</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">2025-08-20</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">CLM5678</td>
			  <td style="padding:8px 12px; border:1px solid #ddd;">₹ 1,50,000</td>
			  <td style="padding:8px 12px; border:1px solid #ddd;">Pending</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px 12px; border:1px solid #ddd;">SR1010</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">Closed</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">2025-08-22</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">CLM5679</td>
			  <td style="padding:8px 12px; border:1px solid #ddd;">₹ 2,00,000</td>
			  <td style="padding:8px 12px; border:1px solid #ddd;">Approved</td>
            </tr>
          </tbody>
      `;
        }
    }

    function replacepopularResponseMonth() {
        const popularResponseMonthCard = document.querySelector("#popularResponseMonth");

        if (!popularResponseMonthCard) return;

        // Change header text
        const header = popularResponseMonthCard.querySelector(".header");
        if (header) header.textContent = "";

        // Replace chart-body with inline styled table
        const chartBody = popularResponseMonthCard.querySelector(".charts");
        if (chartBody) {
            chartBody.innerHTML = `<br>
      `;
        }
    }
