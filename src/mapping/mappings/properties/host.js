module.exports = {
  host: {
    properties: {
      title: {
        type: 'text',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'title:normalizer',
          },
        },
      },
      eisbn: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      isbn: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      eissn: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      issn: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      electronicPublicationDate: {
        type: 'date',
        format: 'date_optional_time',
        ignore_malformed: true,
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'publicationDate:normalizer',
          },
        },
      },
      publicationDate: {
        type: 'date',
        ignore_malformed: true,
        format: 'date_optional_time',
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'publicationDate:normalizer',
          },
        },
      },
      copyrightDate: {
        type: 'date',
        ignore_malformed: true,
        format: 'date_optional_time',
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'publicationDate:normalizer',
          },
        },
      },
      issue: {
        type: 'integer',
        ignore_malformed: true,
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'issue:normalizer',
          },
        },
      },
      part: {
        type: 'integer',
        ignore_malformed: true,
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'volpage:normalizer',
          },
        },
      },
      specialIssue: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'issue:normalizer',
          },
        },
      },
      supplement: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'volpage:normalizer',
          },
        },
      },
      genre: {
        type: 'keyword',
      },
      doi: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      sici: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      publisher: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
          },
        },
      },
      publisherId: {
        type: 'keyword',
      },
      authors: {
        type: 'nested',
        properties: {
          surname: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          forename: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          fullname: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          halAuthorId: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          idHal: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          researcherId: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          idRef: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },

          },
          isni: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          orcId: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          viaf: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
        },
      },
      bookId: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      journalId: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      otherNumber: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      conference: {
        properties: {
          name: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
              normalized: {
                type: 'keyword',
                normalizer: 'title:normalizer',
              },
            },
          },
          date: {
            type: 'date',
            ignore_malformed: true,
            format: 'date_optional_time',
            fields: {
              keyword: {
                type: 'keyword',
              },
              normalized: {
                type: 'keyword',
                normalizer: 'publicationDate:normalizer',
              },
            },
          },
          place: {
            type: 'text',
          },
          country: {
            type: 'keyword',
          },
        },
      },
      editors: {
        properties: {
          affiliations: {
            type: 'nested',
            properties: {
              address: {
                type: 'text',
              },
              orgName: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                },
              },
              country: {
                type: 'keyword',
              },
            },
          },
          roles: {
            type: 'keyword',
          },
          idRef: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'id:normalizer',
              },
            },
          },
          fullname: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          forename: {
            type: 'text',
          },
          surname: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          orgName: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
        },
      },
      pages: {
        properties: {
          first: {
            type: 'integer',
            ignore_malformed: true,
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          last: {
            type: 'integer',
            ignore_malformed: true,
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          total: {
            type: 'integer',
            ignore_malformed: true,
            fields: {
              keyword: {
                type: 'keyword',
              },
            },
          },
          range: {
            type: 'keyword',
            fields: {
              normalized: {
                type: 'keyword',
                normalizer: 'volpage:normalizer',
              },
            },
          },
        },
      },
      volume: {
        type: 'integer',
        ignore_malformed: true,
        fields: {
          keyword: {
            type: 'keyword',
          },
          normalized: {
            type: 'keyword',
            normalizer: 'volpage:normalizer',
          },
        },
      },
      meetingAbstractNumber: {
        type: 'keyword',
        fields: {
          normalized: {
            type: 'keyword',
            normalizer: 'id:normalizer',
          },
        },
      },
      subject: {
        type: 'nested',
        properties: {
          lang: {
            type: 'keyword',
          },
          value: {
            type: 'text',
          },
        },
      },
      language: {
        type: 'keyword',
      },
    },
  },
};
