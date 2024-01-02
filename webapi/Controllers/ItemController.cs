using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController : ControllerBase
{
    private static readonly Item[] Items = new[] {
        new Item {
            Name = "B. F. Sword",
            Photo = "sword"
        },
        new Item {
            Name = "Recurve Bow",
            Photo = "bow"
        },
        new Item {
            Name = "Needlessly Large Rod",
            Photo = "rod"
        },
        new Item {
            Name = "Tear of the Goddess",
            Photo = "tear"
        },
        new Item {
            Name = "Chain Vest",
            Photo = "chain"
        },
        new Item {
            Name = "Negatron Cloak",
            Photo = "cloak"
        },
        new Item {
            Name = "Giant's Belt",
            Photo = "belt"
        },
        new Item {
            Name = "Sparring Gloves",
            Photo = "glove"
        },
    };

    private readonly ILogger<ItemController> _logger;

    public ItemController(ILogger<ItemController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetItem")]
    public Item[] Get()
    {
        return Items;
    }
}
