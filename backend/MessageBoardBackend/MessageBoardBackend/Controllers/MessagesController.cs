using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        public IEnumerable<Message> Get() {
            return new Message[] {
                new Message{
                    Owner = "Leon",
                    Content = "Hello"
                },
                new Message{
                    Owner = "QQ",
                    Content = "Hi",
                },
            };
        }
    }
}
