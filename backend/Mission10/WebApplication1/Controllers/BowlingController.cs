using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private BowlingLeagueContext _bowlingContext;

        public BowlingController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;
        }

        [HttpGet(Name = "GetBowlingData")]
        public IEnumerable<Bowler> Get()
        {
            var bowlingList = _bowlingContext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();
            return bowlingList;
        }
    }
}