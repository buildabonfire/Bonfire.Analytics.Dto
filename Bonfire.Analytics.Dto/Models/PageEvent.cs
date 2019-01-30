﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bonfire.Analytics.Dto.Models
{
    public class PageEvent
    {
        public int EngagementValue { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public bool IsCurrentVisit { get; set; }
        public string Data { get; set; }
    }
}