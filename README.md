# Postgraphile - express - typescript


## Graphql examples

Get some ticket data, join some relation
```
{
  allTickets {
    nodes {
      id
      stateId
      closeAt
      createdAt
      groupId
      ticketStateByStateId {
        id
        stateTypeId
        name
      }
      userByOwnerId {id}
      ticketFlagsByTicketId
      {totalCount}
    }
  }
}

```

Ticket Priorities

```
{
  allTicketPriorities {
    edges {
      node {
        id
        defaultCreate
        uiIcon
        uiColor
        active
        createdAt
      }
    }
  }
}

```


## Useful links


### Zammad

[https://docs.zammad.org/en/latest/install/docker-compose.html](https://docs.zammad.org/en/latest/install/docker-compose.html)

[https://docs.zammad.org/en/latest/install/docker-compose/environment.html](https://docs.zammad.org/en/latest/install/docker-compose/environment.html)

### Postgraphile

[https://www.graphile.org/postgraphile/relations/](https://www.graphile.org/postgraphile/relations/)

[https://www.graphile.org/postgraphile/filtering/](https://www.graphile.org/postgraphile/filtering/)

[https://www.graphile.org/postgraphile/custom-queries/](https://www.graphile.org/postgraphile/custom-queries/)

[https://www.graphile.org/postgraphile/extending-raw/](https://www.graphile.org/postgraphile/extending-raw/)